# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::PostController, type: :controller do
  before do
    @request.env['devise.mapping'] = Devise.mappings[:user]
    @user = User.create(email: 'test@email.com', password: '112233')
    sign_in(@user)
    @post1 = @user.posts.create(title: '123', content: '123')
    @post2 = @user.posts.create(title: '1234', content: '1234')
    Bullet.start_request
  end

  describe 'authenticate_user protection' do
    context 'when user is not logged in' do
      it 'redirects to sign_in' do
        sign_out(@user)
        get :index
        expect(assigns(:posts)).to eq(nil)
      end
    end

    context 'when user is logged in' do
      it 'renders template' do
        get :index
        expect(assigns(:posts)).not_to eq(nil)
      end
    end
  end

  describe '#index' do
    it 'returns records' do
      get :index
      posts = assigns(:posts)
      expect(posts.first).to be_a(Post)
      expect(posts.count).to eq(Post.count)
    end
  end

  describe '#create' do
    it 'creates new record' do
      expect do
        post :create, params: {
          title: 'title',
          user_id: @user.id
        }
      end.to change(Post, :count).by(1)
    end
  end

  describe '#update' do
    it 'updates record' do
      expect(Post.last.title).not_to eq('new_title')
      expect do
        patch :update, params: {
          title: 'new_title',
          id: @post2.id
        }
      end.to change(Post, :count).by(0)
      expect(assigns(:post)).to eq(@post2)
      expect(Post.last.title).to eq('new_title')
    end
  end

  describe '#destroy' do
    it 'discards record' do
      expect(Post.count).to eq(2)
      expect do
        delete :destroy, params: {
          id: @post2.id
        }
      end.to change(Post, :count).by(-1)
      expect(Post.last.id).to eq(@post1.id)
      expect(Post.with_discarded.count).to eq(2)
    end
  end
end
