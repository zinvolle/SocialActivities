import { zodResolver } from "@hookform/resolvers/zod";
import { editProfileSchema, type EditProfileSchema } from "../../lib/schemas/editProfileSchema";
import { useForm } from "react-hook-form";
import TextInput from "../../app/shared/components/TextInput";
import { Box, Button } from "@mui/material";
import { useProfile } from "../../lib/hooks/useProfile";
import { useParams } from "react-router";

type Prop = {
    profile?: Profile
    onSaved?: () => void; // callback after successful save
}

export default function ProfileEditForm({ profile, onSaved }: Prop) {

    const {id} = useParams();

    const { updateProfile } = useProfile(id);
    const { control, handleSubmit, formState: { isValid, isSubmitting } } = useForm<EditProfileSchema>({
        mode: 'onTouched',
        resolver: zodResolver(editProfileSchema),
        defaultValues: {
            displayName: profile?.displayName ?? '',
            bio: profile?.bio ?? ''
        }
    });

    const onSubmit = async (data: EditProfileSchema) => {
        await updateProfile.mutateAsync(data);
        if (onSaved) onSaved();
    }

    return (
        <Box component='form' onSubmit={handleSubmit(onSubmit)} >
            <TextInput label='Display Name' control={control} name='displayName' sx={{ mb: 5 }} />
            <TextInput label='Bio' control={control} name='bio' multiline rows={10} />
            <Box sx={{display:'flex', justifyContent:'end', alignItems:'end', mt:2}}>
                <Button color='error' variant="contained" onClick={onSaved} sx={{mr:1}}>
                    cancel
                </Button>
                <Button type='submit' disabled={!isValid || isSubmitting} variant='contained' >
                    Save
                </Button>
            </Box>
        </Box>
    )
}