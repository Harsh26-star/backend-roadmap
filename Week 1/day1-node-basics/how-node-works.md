# **What is the event loop ?**

The event loop is the basically like a task manager that overlooks tasks and what order to execute them in,
The event loop executes sync tasks first and gives async tasks to a component of the event loop that is CallStack after all the sync tasks are completed the event loop goes to the Callback queue which is where the completed async tasks go to wait for their turn

# **Why does Promise print before setTimeout even when both are async? **

Promises print before setTimeout because Promises go into a microtask queue that has higher priority than the callback queue.

# **What does "non-blocking" actually mean ? **
Non-blocking means it doesn't block tasks that can execute faster just for other tasks that take time to execute, it executes the sync tasks before the async tasks instead of just blokcing the sync tasks it runs them in the background in the callstack 