import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import fetchUser from "../Redux/user/userActions";

const UserContainer = ({ fetchUserData, userData }) => {
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <>
      <h3>User List</h3>
      {userData.loading ? (
        <h1>Loading....</h1>
      ) : userData.error ? (
        <h4>{userData.error}</h4>
      ) : (
        userData &&
        userData.users &&
        userData.users.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
