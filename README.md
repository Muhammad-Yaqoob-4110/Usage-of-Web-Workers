<<<<<<< HEAD
# Brief Description of Project
We know that JavaScript is single threaded. The main thread, also known as the UI thread,will execute our code line by line, without 
being able to execute lines in parallel. So, I have created a Data Processing Application that is performing heavy data processing i.e. complex calculations with loop running in Millions times using Web Workers. 

## WithOut WebWorker
I defined a react component, with two signal values. The counter value is simply incremented when the plus one button is clicked. The answer to life value will take a while to compute however, due to this time consuming for loop. At runtime, we can seamlessly increase the counter but, once the “Get Answer” button is clicked, the UI will be non responsive until the for loop is completed.

Here is the reason why, whenever I’m 
clicking the button to increase the counter, all callbacks will be pushed in the queue, but the event loop can’t move these tasks to the stack until the “getAnswerToLife” 
function finishes its execution.

This is where WebWorkers can help, since they run scripts in the background, on separate threads. Compared to the UI thread WebWorkers have one big limitation - they can’t interact with the DOM. This makes working with WebWorkers very similar 
to the experience of working with the network.
## With WebWorker
So let’s move our long running task into 
a new script called worker.js. The main thread and the worker will communicate with 
each other via messages. To accomplish this, we’ll wrap our worker code in an “onmessage” function, and we’ll send the response back to the UI thread via the “postMessage” function. Then, back in the react component, i have initialized a worker pointing to the worker.js file, and, in the event handler i have replaced the heavy computation with a simple start message to the worker instance. Then, i have listen for any messages coming back from the worker, and, when that response comes, i have updated my UI accordingly.
Now, when we run this code, the counter 
listener is always executing, even though we also clicked the “Get Answer” button.

This is possible because when the “Get Answer” is clicked, a simple start message is sent to the WebWorkers API. Then, the stack is cleared, and the event loop can move more work from the queue to the stack. Finally, just like we saw in the FetchAPI case, when the Worker computation is ready,  
the response is sent via a callback to the queue, and, at some point, it will end up back in the stack, where the UI will be updated.

#  Instructions on how to run the project locally

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Benefits provided by using Web Workers
* JavaScript code, in my case, the time consuming loop which is now non-blocking and rather it is giving snappy sense.

* This webworkers, allows our code to run smoothly.  

* WebWorkers are usefull whenever a call to the server is performed, because the request is dispatched to the Fetch API, and the event loop clears the stack. When the response is available, a callback is pushed in the queue, and will end up being processed when its turn comes.

* Webworks are the require of today because the reality of today is that modern 
frontend development interacts with AI libraries and complex WebAssembly 
algorithms, so handling heavy, intensive workloads might become a pretty 
common requirement in the near future.

* In case if the webworkers are not implemented the UI will be non responsive until the for loop is completed. But with webworkers the UI was responsive, we have simply send the Workers API for heavy calculatiion and the rest of the interface in ineffected.

# Challenges faced and how i overcame them
* Firstly the webworkers was the newly concept for me. I have never listened this before. But after the completion of my task. It is giving me sense of its importance. As i have already discussed that the modern web development is required Ai and high complexity. So it is neccessary to understand.
* Second challange was for me is that the all the syntax for the web worker was new for me. But the documention on internet and stackoverflow helped me a lot to overcome the issues.
* The time consuming challenge i have fased was the import of web worker in react. Its tired me for the 2 to 3 hours. But finally the stackoverflow has come to rescue me.

* Hosting on netlify was also a challange for me. Beacause everytime i was deploying, it was considering my warnings as errors. But after that i get the solution from the stackover flow and with the build command i have passed a flag that prevented the warnings as errors from the build.

* But everything is okie now.

# References
* Project inspiration from this video https://youtu.be/JMKLXGwltGc?si=bNaaGnMr3o6XpY6h 
* React with Web Workers in TypeScript
  https://blog.logrocket.com/web-workers-react-typescript/

* Environment Variables for Netlify Builds https://docs.netlify.com/configure-builds/environment-variables/

* Understanding Web Workers https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

* How to Use Web Workers in React with TypeScript https://stackoverflow.com/questions/60695105/how-to-use-webworkers-in-react-using-typescript
* React Documentation https://react.dev/
* Tailwind CSS Documentation https://tailwindcss.com/
* DaisiUIDaisiUI Documentation https://daisyui.com/

