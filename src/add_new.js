const addNew = async (name, points) => {
  // const leaderboardItem = document.createElement('li');
  // leaderboardItem.classList.add('flex-box', 'item');
  // if (num % 2 === 0) {
  //   leaderboardItem.classList.add('even');
  // } else {
  //   leaderboardItem.classList.add('odd');
  // }

  // const nameContainer = document.createElement('span');
  // nameContainer.classList.add('item-player');
  // nameContainer.innerHTML = name;

  // const scoreContainer = document.createElement('span');
  // scoreContainer.classList.add('item-score');
  // scoreContainer.innerHTML = score;

  // leaderboardItem.appendChild(nameContainer);
  // leaderboardItem.appendChild(scoreContainer);

  // leaderboard.appendChild(leaderboardItem);
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1NoC71hDswXGQoJ5wACA/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: points,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default addNew;
