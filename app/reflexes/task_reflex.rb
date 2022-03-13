class TaskReflex < ApplicationReflex
  attr_reader :task
  before_reflex :find_task

  def toggle_completed
    task.update(completed_at: element.checked ? Time.current : nil)
  end

  def destroy
    task.destroy
  end

  def reorder(position)
    task.insert_at(position)
  end

  private

  def find_task
    @task = Task.find(element.dataset.id)
  end
end