FactoryGirl.define do
  factory :card do
    priority 1
    complete false
    title "MyString"
    description "MyText"
    user nil
  end
end
