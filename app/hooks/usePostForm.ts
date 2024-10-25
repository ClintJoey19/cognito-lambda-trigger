import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  template: z.string().min(1, { message: "Template must be selected" }),
  title: z.string().min(1, { message: "Title must be filled" }),
  content: z.string().min(1, { message: "Content must be filled" }),
});

type TemplateData = {
  title: string;
  content: string;
};

const templates: { [key: string]: TemplateData } = {
  awards: {
    title: "REX WINNERS",
    content: "Congrats",
  },
  birthdays: {
    title: "Happy Birthday",
    content: "@all",
  },
  news: {
    title: "Hello World",
    content: "Hello",
  },
};

const usePostForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      template: "",
      title: "",
      content: "",
    },
  });
  const isSubmitting = form.formState.isSubmitting;

  const handleTemplateChange = (template: string) => {
    form.setValue("title", templates[template].title);
    form.setValue("content", templates[template].content);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  };

  return { form, isSubmitting, handleTemplateChange, onSubmit };
};

export default usePostForm;
