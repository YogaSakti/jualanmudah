const initialState = {
  mailSendList: [],
  mailDraftList: [],
  draft : ""
};

export default function mailReducer(mailState = initialState, action) {
  switch (action.type) {
    case "SUCCESS_GET_MAIL_SEND_LIST":
      return {
        ...mailState,
        mailSendList: action.payload,
      };
    case "SUCCESS_GET_MAIL_DRAFT_LIST":
      return {
        ...mailState,
        mailDraftList: action.payload,
      };
      case "SUCCESS_GET_MAIL_DRAFT":
        return {
          ...mailState,
          draft: action.payload,
          editor: action.editor,
        };
    case "SUCCESS_DELETE_DRAFT_MAIL":
      return {
        ...mailState,
        mailDraftList: [
          ...mailState.mailDraftList.filter(
            (item) => item.id !== action.payload
          ),
        ],
      };
    case "CHANGE_INPUT_MAIL":
      return {
        ...mailState,
        [action.payload.target.name]: action.payload.target.value,
      };
      case "UPDATE_EDITOR_STATE":
        return {
          ...mailState,
          editor: action.payload,
        };
    default:
      return mailState;
  }
}
