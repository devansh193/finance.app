import { useNewAccount } from "../hooks/use-new-account";
import { Sheet,
SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { AccountForm } from "./account-form";
import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";
import { useCreateAccount } from "../api/use-create-account";

const formSchema = insertAccountSchema.pick({
    name:true,
});

type FormValue = z.input<typeof formSchema>;

export const NewAccountSheet = () =>{

    const {isOpen, onClose} = useNewAccount();
    const mutation = useCreateAccount();

    const onSubmit = (values: FormValue) => {
        mutation.mutate(values);
    };

    return(
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        New Account
                    </SheetTitle>
                    <SheetDescription>
                        Create a new account to track your transactions.
                    </SheetDescription>
                </SheetHeader>
                <AccountForm 
                onSubmit={onSubmit} 
                disabled={mutation.isPending}
                onDelete={()=>{ }}
                defaultValues={{name:"",}}
                 />
            </SheetContent>
        </Sheet>
    )
} 