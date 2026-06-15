# **What is the event loop ?**

The event loop is the basically like a task manager that overlooks tasks and what order to execute them in,
All tasks go to the CallStack but the sync tasks run immediately, but the async tasks wait in the callback queue, the event loop then checks if the call stack is empty, then pushes from the Microtask queue first and then goes to the call back queue

# **Why does Promise print before setTimeout even when both are async? **

Promises print before setTimeout because Promises go into a microtask queue that has higher priority than the callback queue.

# **What does "non-blocking" actually mean ? **
Non-blocking means it doesn't block tasks that can execute faster just for other tasks that take time to execute, it executes the sync tasks before the async tasks instead of just blokcing the sync tasks it runs them in the background via libuv 