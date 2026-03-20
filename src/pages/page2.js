export function page2(data = {}) {
  return `
    <!DOCTYPE html>
    <html>
      <head><title>${data.title}</title></head>
      <body>
        <h1>${data.title}</h1>
        <div>${data.content}</div>
        <hr>
        <p>현재 시간: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `;
}