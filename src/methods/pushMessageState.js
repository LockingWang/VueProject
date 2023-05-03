import emitter from '@/methods/emitter';

export default (style, title, content) => {
  // 有些訊息是字串，有些則是陣列，在此統一格式
  const message = typeof content === 'string' ? [content] : content;
  emitter.emit('push-message', {
    style,
    title,
    content: message.join('、'),
  });
};
