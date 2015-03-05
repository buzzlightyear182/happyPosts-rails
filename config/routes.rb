Rails.application.routes.draw do
  devise_for :users

  root to: 'application#angular'

  resources :posts, only: [:create, :index, :show] do
    resources :comments, only: [:create, :show] do
      member do
        put '/upvote' => 'comments#upvote'
      end
    end

    member do
      put '/upvote' => 'posts#upvote'
    end
  end

  # Putting it in a member blocks makes it so our url parameters map to :id instead of :post_id
end
