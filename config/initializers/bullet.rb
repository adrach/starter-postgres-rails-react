Rails.application.config.after_initialize do
  if Rails.env.development? || Rails.env.test?
    Bullet.enable = true
    Bullet.bullet_logger = true
    Bullet.rails_logger = true
    Bullet.raise = Rails.env.test? # raise an error if an n+1 query occurs
  end
end
