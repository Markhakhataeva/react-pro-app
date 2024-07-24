import {useDispatch} from "react-redux";
import ActionCreators from "../redux/action-creator"
import { bindActionCreators } from "redux";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch);
}