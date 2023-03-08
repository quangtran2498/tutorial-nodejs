const buffer = new Buffer.from("quang test bộ đệm");
buffer.write("Codevolution");

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());


//! khi tải dữ liệu nó sẽ chia theo từng đoạn dữ liệu để tránh việc khi người dùng mà không dùng hết tất cả dữ liệu đó để ko mất công
//! khi dữ liệu chưa đủ 1 đoạn nó sẽ lưu vào bộ đệm để khi nào đủ dữ liệu 1 đoạn thì nó sẽ cho chạy 
//! khi mà chưu đử dữ liệu của 1 đoạn thì khi hiển thì nó sẽ có cái hình loading