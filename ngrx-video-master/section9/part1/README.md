1. this is Redux, the artefacts
2. it has a "manual" pub-sub
3. using RxJS for the PubSub instead means finding a suitable candidate
3.1 what's a suitable candidate 
- something that can PubSub
- something we can add data to
- something that can maintain state
4. Subject, we can add data to it, we can't with an Observable
5. It doesn't remember passed data though and subscriber might start subscribing at any point - BehaviorSubject
6. What about merging state that Redux does? - scan operator
7. a working version

part II - coming together
1. slice of state
2. can we listen to a specific event? effect() method, can we find those subscribers and carry out their function and give them the dispatch() function

part III
Typescript?
Supporting operators? pipe()
