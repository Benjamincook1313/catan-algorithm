// Write a function that, given an array containing interconnected "roads",
// finds the longest possible consecutive amount of touching roads,
// and returns the count of roads that are part of that path.
// Each individual road has two ends, and each end can be connected to, at max, two other roads.
    // The longest path cannot go back over roads that have already been counted as part of the path.
    // Also, any given road in the path with both a "previous" and "next" road cannot be connected
    // to both the "previous" and "next" road at the same intersection.
        // For understanding this last rule, see the visualization of three roads below
        /*
                    |
                   /|
        */
        // where the top road is road a, the bottom left road is road b, and the bottom center road
        // is road c, and they are all connected at the same point in the center.
        // If I count road a in my path, and then count road b as well,
        // I cannot count road c after road b.

// Additional constraints:
    // there will be a max of 15 roads in any graph
    // you can assume that road IDs in our code will be unique lowercase letters of the alphabet

// In the declared "graph" arrays below (which you may use to test your function), each object represents a road.
// Roads can touch other roads at either end (ends being represented by the sub-arrays in <graph-name>.touching)
// and, as already stated, each road end can touch up to two other roads.
// However if a road end touches 0 other roads, it will not have a respective sub-array in <graph-name>.touching
    // i.e. - if a road touches no roads at either of its two ends, <graph-name>.touching
    // would be an empty array (no sub-arrays)


//Test Inputs:


//when graph2 is passed to your function, it should return 6
let graph2 = [
  {id:'a', touching:[['b'],['f']]},
  {id:'b', touching:[['a'],['c']]},
  {id:'c', touching:[['b'],['d']]},
  {id:'d', touching:[['e'],['c']]},
  {id:'e', touching:[['f'],['d']]},
  {id:'f', touching:[['a'],['e']]},
];

//when graph3 is passed to your function, it should return 1
let graph3 = [
  {id:'a', touching:[]},
  {id:'b', touching:[]},
];

//when graph4 is passed to your function, it should return 7
let graph4 = [
  {id:'a', touching:[['b'],['f','g']]},
  {id:'b', touching:[['a'],['c']]},
  {id:'c', touching:[['b'],['d']]},
  {id:'d', touching:[['e'],['c']]},
  {id:'e', touching:[['f'],['d']]},
  {id:'f', touching:[['a','g'],['e']]},
  {id:'g', touching:[['a','f']]}
];

//when graph5 is passed to your function, it should return 12
let graph5 = [
  {id:'a', touching:[['b']]},
  {id:'b', touching:[['a'],['c']]},
  {id:'c', touching:[['b'],['d']]},
  {id:'d', touching:[['c'],['e']]},
  {id:'e', touching:[['d'],['f']]},
  {id:'f', touching:[['e'],['g','m']]},
  {id:'g', touching:[['f','m'],['h']]},
  {id:'h', touching:[['g'],['i']]},
  {id:'i', touching:[['h'],['j']]},
  {id:'j', touching:[['i'],['k']]},
  {id:'k', touching:[['j'],['m','l']]},
  {id:'l', touching:[['m','k']]},
  {id:'m', touching:[['l','k'],['f','g']]},
];

//when graph6 is passed to your function, it should return 14
let graph6 = [
  {id:'a', touching:[['b'],['g','f']]},
  {id:'b', touching:[['a'],['c']]},
  {id:'c', touching:[['b'],['d']]},
  {id:'d', touching:[['c'],['e','o']]},
  {id:'e', touching:[['d','o'],['f','k']]},
  {id:'f', touching:[['e','k'],['a','g']]},
  {id:'g', touching:[['f','a'],['h']]},
  {id:'h', touching:[['g'],['i']]},
  {id:'i', touching:[['h'],['j']]},
  {id:'j', touching:[['i'],['k','l']]},
  {id:'k', touching:[['j','l'],['f','e']]},
  {id:'l', touching:[['j','k'],['m']]},
  {id:'m', touching:[['l'],['n']]},
  {id:'n', touching:[['o'],['m']]},
  {id:'o', touching:[['d','e'],['n']]},
];

//when graph1 is passed to your function, it should return 3
let graph1 = [
    {id:'a', touching:[['b'],['c']]},
    {id:'b', touching:[['a']]},
    {id:'c', touching:[['a']]},
];

// Code your solution here:

function restructure(graph){
  const newArr = [];
  graph.forEach(node => {
    let obj = {};
    obj.id = node.id;
    obj.touching = [];
    if(node.touching[0]){
      if(node.touching[0][0]) obj.touching.push(node.touching[0][0])
      if(node.touching[0][1]) obj.touching.push(node.touching[0][1])
    }
    if(node.touching[1]){
      if(node.touching[1][0]) obj.touching.push(node.touching[1][0])
      if(node.touching[1][1]) obj.touching.push(node.touching[1][1])
    }

    newArr.push(obj);
  })
  
  return newArr;
}


function longestRoad(graph){
  const roads = restructure(graph);
  // console.log(roads);
  const longest = 0;
  const startAt = '';

  roads.forEach(start => {
    // const stack = [start.id]; // depth first
    const queue = [start.id]; // breadth first

    let count = 0;
    const visited = new Set();

    while(queue.length > 0){
      // write algorithm 
    }

    if(count > longest) longest = count, startAt = start.id;
  });

  return longest;
}

longestRoad(graph6);