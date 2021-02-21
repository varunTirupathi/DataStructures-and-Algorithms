# DataStructures-and-Algorithms
This repository contains data structures and algorithms that are implemented in JavaScript for improving my skills

Hash Table: Stores values in Key-value pairs.

Works based on the hash function to generate hash of the key 

what is a Hash function?
simply a function that generates a fixed value for each input it gets.

There are 2 types of hash generators a) SHA-1 hash generator and b) SHA-256 hash generator 

-> If we give hash value no one will have any idea about the input and the same hash value will be generated irrespective of number of types the input is passed
This we call as Idempotent. This helps in fast data access.

Problem with Hash table is: Time taken by the hash function generator to access and generate the keys.

SHA-256 hash generator takes long time to generate the hash. Generally it is used in cryptography.

key and value of hash table can be of any data type. With object we can save only a string as a key but in map we can save any type.
map maintains insertion order.

set is similar to map. it only stores keys not values

Hash tables imporves time complexiy especially in terms of nested loops and also there is a trade off between time and memory.

Why hash tables are better than arrays:

Insert O(1)
lookup O(1)
delete O(1)
search O(1)

Collision: There is a possibility that 2 values are stored at the same memory space which slows down the ability to access the information. ISo hash tables are always best in terms of time complexity if we have good resolution for collision issue.


