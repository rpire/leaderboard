const addNew = (leaderboard, name, score, num) => {
  const leaderboardItem = document.createElement('li');
  leaderboardItem.classList.add('flex-box', 'item');
  if (num % 2 === 0) {
    leaderboardItem.classList.add('even');
  } else {
    leaderboardItem.classList.add('odd');
  }

  const nameContainer = document.createElement('span');
  nameContainer.classList.add('item-player');
  nameContainer.innerHTML = name;

  const scoreContainer = document.createElement('span');
  scoreContainer.classList.add('item-score');
  scoreContainer.innerHTML = score;

  leaderboardItem.appendChild(nameContainer);
  leaderboardItem.appendChild(scoreContainer);

  leaderboard.appendChild(leaderboardItem);
};

export default addNew;