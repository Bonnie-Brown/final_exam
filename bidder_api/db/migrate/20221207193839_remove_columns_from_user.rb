class RemoveColumnsFromUser < ActiveRecord::Migration[7.0]
  def change
    remove_reference :users, :auction
    remove_reference :users, :bid
  end
end
