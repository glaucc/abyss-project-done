
  let inputs = ["Created for you!", "And Another One!", "There you are!", "Okay one more too", "That's enough", "I've run out of ideas", "Come onn", "Tired at the moment", "I don't get paid enough for this", "Please stop"]
  
  inputs.reverse()

  let ul = document.getElementsByClassName('main')
  
  console.log(ul)
  
  var arr = [].slice.call(ul);
        
    arr = document.getElementsByClassName('links')
    
    // console.log(arr)
  
    let lists = [].slice.call(arr)
    // console.log(lists)

    lists.forEach( elements => {
      // console.log(elements)
      elements.addEventListener("click", function() {
        console.log("clicked")
        
        function used() {
          inputs.pop()
          console.log("it works")
        }
        
        
        let new_list = document.createElement("div");
        
        if (inputs.length > 0) {
          used()
          
          new_list.innerHTML = `
          <ul><li> <a class="links" href="#"><span>${inputs.at(-1)}</span></a> </li></ul>

      
      
          `;
          new_list.setAttribute('style:after', 'right: auto, left: 50%, border-left: 1px solid #ccc')
        }
        else {

          new_list.innerHTML = `
          <ul><li> <a class="links" href="#"><span>Okay, I'm gone</span></a> </li></ul>
  
      
      
          `;
          new_list.setAttribute('style:after', 'right: auto, left: 50%, border-left: 1px solid #ccc')
        }
        elements.appendChild(new_list);
      })
    })
      





  
  // let trigger = document.getElementsByClassName("main");
  // let toDoLists = document.getElementById("toDoLists");
  // trigger.forEach(element => {
  //   element.addEventListener('click', function() {
  //   alert('1')
  // })
    //   let elements = document.createElement("div");
    //   elements.innerHTML = `
    //       <li> <a href="#"><span>Great Grand Child</span></a> </li>

      
      
    //   `;
    
    //   toDoLists.appendChild(elements);
    // })