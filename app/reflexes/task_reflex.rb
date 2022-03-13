class TaskReflex < ApplicationReflex
  def toggle_completed
    Task.find(element.dataset.id).update(completed_at: element.checked ? Time.current : nil)
  end

  def destroy
    Task.find(element.dataset.id).destroy
  end
end