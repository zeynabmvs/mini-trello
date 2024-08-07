import {useDispatch} from "react-redux";
import {editList} from "features/boards/boardsSlice.js";
import {closeModal} from "features/modalSlice";
import ListFrom from "components/forms/ListFrom.jsx";
import ModalTitle from "components/modals/partials/modalTitle.jsx";

const EditList = ({onClose, detail}) => {
	const dispatch = useDispatch();
	
	const onSubmit = (data, e) => {
		dispatch(editList({list: detail, title: data.title}));
		dispatch(closeModal());
		e.target.reset();
	};
	
	return (
		<>
			<ModalTitle text={`Edit List ${detail.title}`}/>
			
			<ListFrom
				onClose={onClose}
				onSubmit={onSubmit}
				defaultValues={{title: detail.title}}
			/>
		</>
	);
};
export default EditList;
