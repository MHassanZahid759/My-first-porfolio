import fs from 'fs';
import path from 'path';

const storageFile = path.join('/tmp', 'portfolio-messages.json');

function readMessages() {
  try {
    if (!fs.existsSync(storageFile)) return [];
    const messages = JSON.parse(fs.readFileSync(storageFile, 'utf8'));
    return Array.isArray(messages) ? messages : [];
  } catch {
    return [];
  }
}

function writeMessages(messages) {
  fs.writeFileSync(storageFile, JSON.stringify(messages, null, 2), 'utf8');
}

export function addMessage({ name, email, subject, message }) {
  const messages = readMessages();
  const record = {
    id: messages.length ? Math.max(...messages.map((item) => item.id)) + 1 : 1,
    name,
    email,
    subject,
    message,
    created_at: new Date().toISOString()
  };
  messages.push(record);
  writeMessages(messages);
  return record;
}

export function getMessages() {
  return readMessages().sort((first, second) => new Date(second.created_at) - new Date(first.created_at));
}

export function deleteMessage(id) {
  const messages = readMessages();
  const remaining = messages.filter((message) => message.id !== id);
  if (remaining.length === messages.length) return false;
  writeMessages(remaining);
  return true;
}
