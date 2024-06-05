import {Draggable, Droppable} from "@hello-pangea/dnd";
import {Paper, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {useDispatch} from "react-redux";
import {openModal} from "../features/modalSlice";
import BoardListCard from "./BoardListCard";
import OptionsMenu from "./OptionsMenu";

const BoardList = ({list, index}) => {
	const dispatch = useDispatch();
	
	const onDeleteListHandler = () => {
		dispatch(
			openModal({
				type: "confirmDelete",
				detail: {
					type: "list",
					obj: list,
					message: `Are you sure you want to delete list ${list.title} and all of its tasks?`,
				},
			})
		);
	};
	const onEditListHandler = () => {
		dispatch(openModal({type: "editList", detail: list}));
	};
	
	// TODO: change lightblue color, use mui color
	return (
		<Draggable draggableId={list.id} index={index}>
			{(provided, snapshot) => (
				<Paper
					// component={"li"}
					elevation={3}
					sx={{
						padding: 1,
						margin: 1,
						width: "250px",
						// backgroundColor: snapshot.isDragging ? "lightblue" : theme.backgroundColor,
						alignSelf: "flex-start",
						listStyleType: "none"
					}}
					className={`${snapshot.isDragging && "is-dragging "}`}
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					{/*list's title box*/}
					<Stack
						direction="row"
						justifyContent="space-between"
						{...provided.dragHandleProps}
						
						sx={{"&:hover": {bgcolor: "lightblue"},}}
					>
						<Typography variant={"h6"}>
							{list.title}
						</Typography>
						<OptionsMenu
							text="list"
							onEdit={onEditListHandler}
							onDelete={onDeleteListHandler}
						></OptionsMenu>
					</Stack>
					
					<Droppable
						droppableId={`${list.id}-${index.toString()}`}
						type={"CARD"}
					>
						{(provided) => (
							// list's content box
							<Box
								ref={provided.innerRef}
								{...provided.droppableProps}
								// height="100%"
								overflow="auto"
								sx={{minHeight: "50px", overflow: "auto"}}
							>
								{list.tasks?.map((item, index) => (
									<BoardListCard key={item.id} task={item} index={index}/>
								))}
								{provided.placeholder}
							</Box>
						)}
					</Droppable>
				</Paper>
			)}
		</Draggable>
	);
};

export default BoardList;
