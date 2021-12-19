export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);


export const getSessions = (sessionId) => $.ajax({
  url: `/api/sessions/${sessionId}`,
});

export const getCurrentUser = (userId) => $.ajax({
  url: `/api/users/${userId}`,
});
