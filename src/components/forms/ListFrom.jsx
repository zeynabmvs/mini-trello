import {Box, Button, Stack, TextField} from "@mui/material";
import {useForm} from "react-hook-form";

const ListFrom = ({onSubmit, onClose, defaultValues = {}}) => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({defaultValues: defaultValues});
	
	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": {mb: 1, width: "100%"},
			}}
			noValidate
			autoComplete="off"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div style={{marginBottom: "24px"}}>
				<TextField
					{...register("title", {
						required: "Required",
						maxLength: {
							value: 50,
							message: "Max length is 50",
						},
					})}
					error={errors?.title}
					id="outlined-helperText"
					label="Title"
					variant="outlined"
					type="text"
					helperText={
						errors?.title && errors?.title?.message
					}
				/>
			</div>
			<Stack direction="row" sx={{gap: "16px"}}>
				<Button variant="contained" type="submit" sx={{flexGrow: 1}}>
					Save
				</Button>
				<Button variant="outlined" onClick={onClose} color="error" sx={{flexGrow: 1}}>
					Cancel
				</Button>
			</Stack>
		</Box>
	);
};

export default ListFrom;
