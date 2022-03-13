class ListReflex < ApplicationReflex
  def create_task
    list = List.find(element.dataset.list_id)
    @new_task = list.tasks.create(task_params)
    @new_task = Task.new if @new_task.persisted?
    # raise task.errors.full_messages.join(", ") unless task.save
  end

  private

  def task_params
    params.require(:task).permit(:name)
  end
end