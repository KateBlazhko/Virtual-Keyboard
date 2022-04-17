export function removeClassName(className,...elements) {
    for (let element of elements) {
      element.classList.remove(className);
    }
  }

export function toggleClassName(className,...elements) {
    for (let element of elements) {
      element.classList.toggle(className);
    }
}

export function addClassName(className,...elements) {
    for (let element of elements) {
      element.classList.add(className);
    }
}

export function randomSort(array) {
    let currentIndex = array.length;
    let randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export function increaseCircle(operand, limit) {
    if (operand < limit) {
        operand += 1;
      } else {
        operand = 1;
      }
    return operand
}

export function decreaseCircle(operand, reset) {
  if (operand !== 0) {
    operand -= 1;
  } else {
    operand = reset;
  }
}

