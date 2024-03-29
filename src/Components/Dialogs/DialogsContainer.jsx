import { connect } from 'react-redux';
import { sendMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessageBody) => {
			dispatch(sendMessageCreator(newMessageBody));
		},
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	withAuthRedirect,
)(Dialogs);
