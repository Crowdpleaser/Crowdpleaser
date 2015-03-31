class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :name
      t.string :image
      t.integer :user_id
      t.boolean :is_animated_image, default: false
      t.timestamps
    end
  end
end
