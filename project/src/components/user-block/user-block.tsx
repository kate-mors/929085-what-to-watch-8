import { MouseEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
//import { State } from '../../types/state';
import { AuthorizationStatus } from '../../utils/const';

// const mapStateToProps = ({ authorization }: State) => ({
//   authorization,
// });

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  logoutAccount() {
    dispatch(logoutAction());
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function UserBlock(props: ConnectedComponentProps): JSX.Element {
  const { logoutAccount } = props;

  const logoutHandler = (evt: MouseEvent) => {
    evt.preventDefault();
    logoutAccount();
  };

  if (AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </li>
        <li className="user-block__item">
          <Link className="user-block__link" onClick={logoutHandler} to="/">
            Sign out
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar"></div>
      </li>
      <li className="user-block__item">
        <Link to="/login" className="user-block__link">
          Sign in
        </Link>
      </li>
    </ul>
  );
}

export { UserBlock };
export default connector(UserBlock);
