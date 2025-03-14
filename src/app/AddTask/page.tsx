import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModelOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskvalue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskvalue("");
    setModelOpen(false);
    router.refresh();
  };
};
