import React, { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Button, Center, Menu, createStyles } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

const sourceInEnglish = `
## Introduction

### Responding to Events in React

- Introduction: Welcome to the presentation on "Responding to Events in React."
- React is a powerful JavaScript library used for building user interfaces.
- In this presentation, we will explore the fundamentals of event handling in React and how it enables interactivity in web applications.
- Learn how to handle events, update component state, and create dynamic user experiences using React's declarative approach.
- Let's dive into the world of event handling in React and discover its potential for building engaging and interactive web applications.

#### Example 

\`\`\`jsx 
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MyComponent;
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Overview of Event Handling in React

- Events play a crucial role in creating interactive web applications, allowing users to interact with the interface and trigger actions.
- React simplifies event handling with its declarative approach, making it easier to manage and respond to user interactions.
- In React, event handling involves writing event handlings as functions associated with specific UI components.
- These event handlings define the desired behavior for events, and React takes care of the underlying event binding and execution.
- React's virtual DOM efficiently updates and re-renders components in response to events, resulting in a responsive and dynamic user interface.

#### Example 
\`\`\`jsx 
import React, { useState } from 'react';

function MyComponent() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h2>Event Handling Example</h2>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MyComponent;
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Basics of Event Handling in React
- In React, event handling is a fundamental aspect of building interactive user interfaces.
- event handlings in React are written as functions that are called when specific events occur, such as button clicks or form submissions.
- event handlings can be attached to various UI elements, allowing you to respond to user interactions.
- React's declarative nature enables you to define the desired behavior for events, making it easier to manage and reason about complex interactions.
- You can add event handlings to React components by using attributes like \`onClick\`, \`onChange\`, or \`onSubmit\`, depending on the type of event you want to handle.

#### Example 

\`\`\`jsx 
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div>
      <h2>Event Handling Example</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyComponent;
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Commonly Used Events in React
- React provides a wide range of events that you can handle to create interactive user interfaces.
- Some commonly used events in React include \`onClick\`, \`onChange\`, \`onSubmit\`, \`onMouseOver\`, \`onKeyDown\`, and \`onFocus\`, among others.
- The \`onClick\` event is used to handle button clicks and other click interactions.
- The \`onChange\` event is used for handling changes in form inputs, such as text fields or checkboxes.
- The \`onSubmit\` event is used to handle form submissions when the user clicks the submit button.
- Each event serves a specific purpose and allows you to capture and respond to specific user actions.
- By utilizing these events, you can create dynamic and engaging user experiences in your React applications.

#### Example 
\`\`\`jsx
import React, { useState } from 'react';

function MyComponent() {
  const [text, setText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('Enter key pressed!');
    }
  };

  const handleFocus = () => {
    console.log('Input field focused!');
  };

  return (
    <div>
      <h2>Event Handling Example</h2>
      <button onClick={handleClick} onMouseOver={handleMouseOver}>
        Click me
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      {isHovered && <p>Button is being hovered!</p>}
    </div>
  );
}

export default MyComponent;
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Using Event Listeners in React
- Event listeners in React allow you to attach event handlings to specific elements or components.
- Event listeners are commonly used when you need more fine-grained control over event handling, such as attaching events to the document or window.
- In React, you can use the \`useEffect\` hook to add and remove event listeners.
- The \`useEffect\` hook provides a clean and efficient way to manage event listeners and perform side effects.
- To add an event listener, you can use the addEventListener method within the \`useEffect\` hook.
- Remember to clean up the event listener by returning a cleanup function from the \`useEffect\` hook to avoid memory leaks.
- Event listeners can be added or removed dynamically based on component lifecycle or state changes, providing flexibility in event handling.

#### Example 
\`\`\`jsx
import React, { useEffect, useState } from 'react';

function ScrollComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h2>Scroll Event Example</h2>
      <p>Scroll Position: {scrollPosition}px</p>
      <div style={{ height: '2000px', background: 'lightgray' }}>
        Scroll down to see the position update.
      </div>
    </div>
  );
}

export default ScrollComponent;
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Best Practices for Event Handling in React
- Organize and structure your event handling code for better readability and maintainability.
- Use descriptive event handling names to clearly indicate their purpose and functionality.
- Handle events at the appropriate level of the component hierarchy to ensure efficient event propagation.
- Consider event delegation when handling events for multiple similar elements to improve performance and simplify the code.
- Extract event handling logic into separate functions or custom hooks for better separation of concerns and reusability.
- Optimize event handling performance by debouncing or throttling event callbacks to prevent excessive function calls.
- Use conditional event handling to attach or detach events based on specific conditions or component states.
- Implement proper error handling to gracefully handle scenarios where events may fail or throw errors.
- Utilize testing and debugging tools to ensure the correctness and smooth functioning of your event handling code.

#### Example 

##### Custom hook
\`\`\`jsx
import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
};

export default useDebounce;
\`\`\`

##### Usage
\`\`\`jsx
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

export default function Component() {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 500)

  const handleChange = (event) => {
    setValue(event.target.value)
  };

  // Fetch API (optional)
  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedValue" changes
  }, [debouncedValue])

  return (
    <div>
      <p>Value real-time: {value}</p>
      <p>Debounced value: {debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Error Handling and Debugging
- Error handling is a crucial aspect of event handling in React to ensure robust and reliable applications.
- Use \`try-catch\` blocks or error boundaries to catch and handle errors that may occur within event handlings.
- Display meaningful error messages or fallback UIs to provide a smooth user experience in case of errors.
- Utilize browser developer tools and React DevTools to debug event handling code and inspect component states.
- Use console.log statements or logging libraries to log relevant information during event handling for easier debugging.
- Leverage React's error boundaries to gracefully handle errors within event handlings and prevent cascading failures.
- Consider writing unit tests for your event handling code to catch errors early and ensure expected behavior.
- Continuously monitor and test your application to identify and fix potential issues in event handling.

#### Example code
\`\`\`jsx
import React, { useState } from 'react';

function ErrorHandlingComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    try {
      // Simulating an error
      if (count === 5) {
        throw new Error('Oops! Something went wrong.');
      }

      setCount(count + 1);
    } catch (error) {
      console.error('Error occurred:', error.message);
      // Display fallback UI or show error message to the user
    }
  };

  return (
    <div>
      <h2>Error Handling and Debugging Example</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ErrorHandlingComponent;
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Conclusion and Additional Resources
- In this presentation, we have explored the fundamentals of event handling in React.
- We've learned how to handle events, update component state, and create dynamic user experiences using React's declarative approach.
- Event handling in React simplifies the process of creating interactive web applications.
- Remember to follow best practices for organizing, structuring, and optimizing event handling code in React.
- By properly handling errors and utilizing debugging tools, you can ensure the reliability and robustness of your event handling code.
- To further enhance your understanding of event handling in React, here are some additional resources:
	- Official React documentation: https://react.dev/learn/responding-to-events
	- Online tutorials and guides: https://www.scaler.com/topics/react/event-handling-in-react/

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
`;

const sourceInId = `
## Pendahuluan
### <em>Responding to Events in React</em>
- React adalah sebuah perpustakaan JavaScript yang powerful digunakan untuk membangun antarmuka pengguna / <em>Frontend</em>.
- Dalam presentasi ini, kita akan menjelajahi dasar-dasar <em>Handling Events in Reactjs</em> dan bagaimana hal tersebut memungkinkan interaktivitas dalam aplikasi web.
- <em>Learn how to handle events, update component state, and create dynamic user experiences using React's declarative approach.</em>
- Mari kita melangkah ke dunia <em>"Handling Events in React"</em> dan temukan potensinya dalam membangun aplikasi web yang menarik dan interaktif.


#### Contoh
\`\`\`jsx 
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MyComponent;
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Gambaran umum <em>Handling Events in React</em>
- <em>Events</em> memiliki peran penting dalam menciptakan aplikasi web interaktif, memungkinkan pengguna berinteraksi dengan antarmuka dan memicu tindakan.
- React menyederhanakan <em>event handling</em> dengan pendekatan deklaratifnya, sehingga lebih mudah mengelola dan menanggapi interaksi pengguna.
- Dalam React, <em>event handling</em> melibatkan penulisan <em>event handling</em> sebagai fungsi yang terkait dengan komponen antarmuka pengguna tertentu.
- <em>event handling</em> ini mendefinisikan perilaku yang diinginkan untuk melakukan interaksi pada aplikasi web, dan React bertanggung jawab atas pengikatan dan eksekusi <em>Events</em> yang mendasarinya.
- <em>Virtual DOM React</em> secara efisien memperbarui dan me-<em>render</em> ulang komponen sebagai respon terhadap <em>events</em>, menghasilkan antarmuka pengguna yang responsif dan dinamis.

#### Contoh 
\`\`\`jsx 
import React, { useState } from 'react';

function MyComponent() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h2>Event Handling Example</h2>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MyComponent;
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Dasar-dasar <em>Handling Events in React</em>
- Dalam React, <em>event handling</em> merupakan aspek fundamental dalam membangun antarmuka pengguna yang interaktif.
- <em>event handling</em> dalam React ditulis sebagai fungsi yang dipanggil ketika peristiwa-peristiwa tertentu terjadi, seperti saat tombol diklik atau saat formulir dikirim.
- <em>event handling</em> dapat dilampirkan ke berbagai elemen antarmuka pengguna, memungkinkan kita untuk menanggapi interaksi pengguna.
- Sifat deklaratif React memungkinkan kita untuk mendefinisikan perilaku yang diinginkan untuk peristiwa, sehingga lebih mudah mengelola dan memahami interaksi yang kompleks.
- Kita dapat menambahkan <em>event handling</em> ke komponen-komponen React dengan menggunakan atribut seperti \`onClick\`, \`onChange\`, atau \`onSubmit\`, tergantung pada jenis <em>event</em> yang ingin kita tangani.

#### Contoh 

\`\`\`jsx 
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div>
      <h2>Event Handling Example</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyComponent;
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### <em>Events</em> yang Sering Digunakan dalam React
- React menyediakan berbagai macam <em>events</em> yang dapat kita tangani untuk menciptakan antarmuka pengguna yang interaktif.
- Beberapa <em>events</em> yang sering digunakan dalam React antara lain \`onClick\`, \`onChange\`, \`onSubmit\`, \`onMouseOver\`, \`onKeyDown\`, dan \`onFocus\`, serta <em>events</em> lainnya.
- <em>Events</em> \`onClick\` digunakan untuk menangani klik tombol dan interaksi klik lainnya.
- <em>Events</em> \`onChange\` digunakan untuk menangani perubahan pada input formulir, seperti <em>input text</em>, <em>checkbox</em>, <em>radio</em>, dan lainnya.
- <em>Events</em> \`onSubmit\` digunakan untuk menangani pengiriman formulir / <em>form</em> ketika pengguna mengklik tombol submit.
- Setiap <em>events</em> memiliki tujuan tertentu dan memungkinkan kita untuk menangkap dan menanggapi tindakan pengguna tertentu.
- Dengan memanfaatkan <em>events</em> ini, kita dapat menciptakan pengalaman pengguna yang dinamis dan menarik dalam aplikasi React kita.

#### Contoh 
\`\`\`jsx
import React, { useState } from 'react';

function MyComponent() {
  const [text, setText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('Enter key pressed!');
    }
  };

  const handleFocus = () => {
    console.log('Input field focused!');
  };

  return (
    <div>
      <h2>Event Handling Example</h2>
      <button onClick={handleClick} onMouseOver={handleMouseOver}>
        Click me
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      {isHovered && <p>Button is being hovered!</p>}
    </div>
  );
}

export default MyComponent;
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### Menggunakan <em>Event Listeners</em> dalam React
- <em>Event Listeners</em> dalam React memungkinkan kita untuk melampirkan <em>event handling</em> ke elemen atau komponen tertentu.
- <em>Event Listeners</em> umumnya digunakan ketika kita membutuhkan kontrol yang lebih terperinci dalam <em>event handling</em>, seperti melampirkan peristiwa ke dokumen atau <em>window / tab</em>.
- Dalam React, kita dapat menggunakan \`useEffect\` hook untuk menambahkan dan menghapus <em>event Listeners</em>.
- Hook \`useEffect\` memberikan cara yang bersih dan efisien untuk mengelola <em>event Listeners</em> dan melakukan efek samping / <em>side effects</em>.
- Untuk menambahkan <em>event Listeners</em>, kita dapat menggunakan metode \`addEventListener\` dalam hook \`useEffect\`.
- Perlu diingat untuk membersihkan <em>event Listeners</em> dengan mengembalikan fungsi pembersihan dari hook \`useEffect\` untuk menghindari kebocoran memori / <em>memory leak</em>.
- <em>Event Listeners</em> dapat ditambahkan atau dihapus secara dinamis berdasarkan siklus hidup komponen atau perubahan status, memberikan fleksibilitas dalam <em>event handling</em>.

#### Example 
\`\`\`jsx
import React, { useEffect, useState } from 'react';

function ScrollComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h2>Scroll Event Example</h2>
      <p>Scroll Position: {scrollPosition}px</p>
      <div style={{ height: '2000px', background: 'lightgray' }}>
        Scroll down to see the position update.
      </div>
    </div>
  );
}

export default ScrollComponent;
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### <em>Best Practices for Event Handling in React</em>
- Organisir dan strukturkan kode <em>event handling</em> kita agar lebih mudah dibaca dan dipelihara.
- Gunakan nama-nama event handling yang deskriptif untuk jelas menunjukkan tujuan dan fungsionalitasnya.
- Tangani peristiwa pada tingkat hierarki komponen yang tepat untuk memastikan propagasi peristiwa yang efisien.
- Pertimbangkan delegasi peristiwa ketika menangani peristiwa untuk beberapa elemen yang serupa untuk meningkatkan kinerja dan menyederhanakan kode.
- Ekstrak logika <em>event handling</em> ke dalam fungsi terpisah atau custom hook untuk pemisahan tugas yang lebih baik dan dapat digunakan kembali.
- Optimalkan performa <em>event handling</em> dengan debouncing atau throttling panggilan fungsi peristiwa untuk mencegah panggilan fungsi yang berlebihan.
- Gunakan <em>event handling</em> bersyarat untuk melampirkan atau melepas peristiwa berdasarkan kondisi khusus atau status komponen.
- Terapkan penanganan kesalahan yang tepat untuk mengatasi dengan baik skenario di mana peristiwa mungkin gagal atau melempar kesalahan.
- Manfaatkan alat pengujian dan debugging untuk memastikan kebenaran dan kelancaran fungsi kode <em>event handling</em> kita.

#### Contoh 

##### Custom hook
\`\`\`jsx
import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
};

export default useDebounce;
\`\`\`

##### Penggunaan
\`\`\`jsx
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

export default function Component() {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 500)

  const handleChange = (event) => {
    setValue(event.target.value)
  };

  // Fetch API (optional)
  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedValue" changes
  }, [debouncedValue])

  return (
    <div>
      <p>Value real-time: {value}</p>
      <p>Debounced value: {debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### <em>Error Handling and Debugging</em>
- <em>Error handling</em> / penanganan kesalahan adalah aspek penting dalam <em>event handling</em> di React untuk memastikan aplikasi yang kokoh dan dapat diandalkan.
- Gunakan blok \`try-catch\` atau boundary kesalahan / <em>error boundaries</em> untuk menangkap dan menangani kesalahan yang mungkin terjadi dalam <em>event handling</em>.
- Tampilkan pesan kesalahan yang bermakna atau antarmuka pengguna alternatif untuk memberikan pengalaman pengguna yang baik dalam kasus saat terjadi kesalahan.
- Manfaatkan alat pengembang peramban / <em>web extensions</em> dan React DevTools untuk melakukan debugging pada kode <em>event handling</em> dan memeriksa status komponen.
- Gunakan pernyataan \`console.log\` atau <em>logging libraries</em> untuk mencatat informasi yang relevan selama proses berlangsung di <em>event handling</em> agar memudahkan proses debugging.
- Manfaatkan perpustakaan boundary kesalahan / <em>error boundaries</em> pada React untuk menangani kesalahan dengan baik dalam <em>event handling</em> dan mencegah terjadinya kegagalan yang berantai.
- Pertimbangkan untuk menulis <em>unit test</em> untuk kode <em>event handling</em> kita, guna mendeteksi kesalahan dengan cepat dan memastikan perilaku yang diharapkan.
- Selalu lakukan pemantauan dan pengujian terus-menerus pada aplikasi kita untuk mengidentifikasi dan memperbaiki potensi masalah dalam <em>event handling</em>.

#### Contoh
\`\`\`jsx
import React, { useState } from 'react';

function ErrorHandlingComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    try {
      // Simulating an error
      if (count === 5) {
        throw new Error('Oops! Something went wrong.');
      }

      setCount(count + 1);
    } catch (error) {
      console.error('Error occurred:', error.message);
      // Display fallback UI or show error message to the user
    }
  };

  return (
    <div>
      <h2>Error Handling and Debugging Example</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ErrorHandlingComponent;
\`\`\`

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

###	Kesimpulan dan Referensi
- Dalam materi ini, kita telah menjelajahi dasar-dasar <em>event handling</em> di React.
- Kita telah belajar bagaimana menangani <em>events</em>, memperbarui status komponen, dan menciptakan pengalaman pengguna yang dinamis menggunakan pendekatan deklaratif React.
- <em>Event handling</em> di React menyederhanakan proses pembuatan aplikasi web interaktif.
- Ingatlah untuk mengikuti <em>best practice</em> dalam mengatur, menyusun, dan mengoptimalkan kode <em>event handling</em> di React.
- Dengan menangani kesalahan dengan benar dan memanfaatkan alat <em>debugging</em>, kita dapat memastikan keandalan dan ketangguhan kode <em>event handling</em> kita.
- Untuk memperdalam pemahaman tentang <em>event handling</em> di React, berikut beberapa referensi tambahan:
	- Dokumentasi resmi React: https://react.dev/learn/responding-to-events
	- Tutorial dan panduan online: https://www.scaler.com/topics/react/event-handling-in-react/

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
`;

const useStyles = createStyles(() => ({
	root: {
		padding: "0 3rem",
	},

	markdown: {
		height: "100%",
		padding: "6rem 6rem",
		fontSize: "24px !important",
	},
}));

export default function Presentation() {
	const { classes } = useStyles();

	const [language, setLanguage] = useState("eng");

	return (
		<div className={classes.root}>
			<MarkdownPreview
				source={language === "eng" ? sourceInEnglish : sourceInId}
				className={classes.markdown}
			/>
		</div>
	);
}
