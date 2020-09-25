export const AUTHED_USER = "AUTHED_USER";

const setAuthedUser = (id) => {
  return {
    type: AUTHED_USER,
    id,
  };
};

export default setAuthedUser;
