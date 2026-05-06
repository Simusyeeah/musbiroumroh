
import { z } from "zod";
import { InputText } from "../../../ui/InputText";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from "../../../components/Button";

type FormData = {
    category: string;
   
}
const schema = z.object({
    category: z.string().min(1, "Nama Category harus diisi"),
  
})

const onSubmit = (data: FormData) => {
    console.log(data);
};

export default function CategoryCreate() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });
    
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
          Add New Category
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Input Nama */}
          <div>
    
            <InputText
                label="Category"
                nama="category"
                register={register}
                error={errors.category?.message}
             />
          </div>

    
          <div className="flex justify-start mt-4">
             <Button type="submit" label="Simpan" />
          </div>
        </form>
      </div>
    </div>
  );
}