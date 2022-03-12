class TaskReflex < ApplicationReflex
  def complete
    Task.find(element.dataset.id).update(completed_at: Time.current)
  end
end