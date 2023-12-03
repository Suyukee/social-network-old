import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			// dispatch(sendMessageCreator());
			dispatch(updateNewMessageBodyCreator(body));
		},
		sendMessage: () => {
			// dispatch(updateNewMessageBodyCreator(body));
			dispatch(sendMessageCreator());
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;