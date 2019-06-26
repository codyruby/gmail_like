class EmailsController < ApplicationController
  def index
    @emails = Email.all.reverse
  end

  def show
    @email = Email.find(params[:id])

    respond_to do |format|
      format.html { redirect_to root_path }
      format.js { }
    end
  end

  def new
  end

  def create
    @email = Email.create(object: Faker::Lorem.sentence, body: Faker::Movie.quote)
    
    respond_to do |format|
      format.html { redirect_to root_path }
      format.js { }
    end
     
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
