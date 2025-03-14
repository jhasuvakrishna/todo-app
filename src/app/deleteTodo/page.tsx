export const deleteTodo = async (id: string) : Promise<void> =>{
    await fetch(`${baseUrl}/tasks/${id}`,{
        method : "DELETE"
    })
}