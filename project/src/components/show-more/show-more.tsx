import React from 'react';
import { showMoreFilms as showMoreFilmsState } from '../../store/actions';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../../types/state';

const mapStateToProps = ({ showedFilmsNumber }: State) => ({
  showedFilmsNumber,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onShowMoreFilmsClick: showMoreFilmsState,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function ShowMoreButton(props: ConnectedComponentProps): JSX.Element {
  const { onShowMoreFilmsClick } = props;

  const handleShowMoreClick = () => {
    onShowMoreFilmsClick();
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={handleShowMoreClick}
      >
        Show more
      </button>
    </div>
  );
}

export { ShowMoreButton };
export default connector(ShowMoreButton);
