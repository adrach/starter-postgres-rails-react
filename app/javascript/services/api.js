const apiFetch = (url, method, body) => (
  fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
);

const get = url => apiFetch(url, 'GET');
const post = (url, data) => apiFetch(url, 'POST', data);
const put = (url, data) => apiFetch(url, 'PUT', data);
const destroy = url => apiFetch(url, 'DELETE');

const api = {
  posts: {
    getAll: () => get('api/post'),
    get: id => get(`api/post/${id}`),
    create: data => post('/api/post', data),
    update: (data, id) => put(`/api/post/${id}`, data),
    destroy: id => destroy(`/api/post/${id}`),
  },
};

export default api;
