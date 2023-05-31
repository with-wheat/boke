import { message as antdMessage } from 'antd'

interface MessageOptions {
  duration?: number
  onClose?: () => void
}

class Message {
  static success(content: string, options?: MessageOptions) {
    antdMessage.success(content, options?.duration, options?.onClose)
  }

  static error(content: string, options?: MessageOptions) {
    antdMessage.error(content, options?.duration, options?.onClose)
  }

  static info(content: string, options?: MessageOptions) {
    antdMessage.info(content, options?.duration, options?.onClose)
  }

  static warning(content: string, options?: MessageOptions) {
    antdMessage.warning(content, options?.duration, options?.onClose)
  }

  static warn(content: string, options?: MessageOptions) {
    antdMessage.warning(content, options?.duration, options?.onClose)
  }

  static loading(content: string, options?: MessageOptions) {
    const hideLoading = antdMessage.loading(content, options?.duration, options?.onClose)

    // 返回一个函数，用于手动结束加载状态的消息
    return () => {
      hideLoading()
      // 这里可以执行你的逻辑，例如执行一些操作或显示其他消息
    }
  }
}

export default Message
