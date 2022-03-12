list = List.create(
  name: Faker::Hipster.sentence(word_count: 3, supplemental: false,  random_words_to_add: 0)
)

10.times do
  list.tasks.create(
    name: Faker::Hipster.sentence(word_count: 3, supplemental: false,  random_words_to_add: 0),
    completed_at: Faker::Boolean.boolean(true_ratio: 0.2) ? Time.current : nil
  )
end
