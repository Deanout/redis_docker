class MessageChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from 'MessageChannel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    ActionCable.server.broadcast 'MessageChannel', {message: data['message']}
  end
end
