<script lang='ts'>
  import type {People} from '$lib/types';
  
  export let data:any;
  const peoples: People[] = data.item

  
  import FilterByTag from './FilterByTag.svelte';
  import PeopleCard from './PeopleCard.svelte';
  import Search from './Search.svelte';

  import { email, pass } from '../store.js';

  let posts:any = [];
  let companys:any = [];
  
  peoples.forEach(element => {
    posts.push(element.post)
    companys.push(element.company)
    posts = [...new Set(posts)]
    companys = [...new Set(companys)]
  });

  let selectedTag = 'all';
  let selectedCompany = 'all';
  
  function selectTag(event:any) {	
    if (selectedTag == event.detail.selectedTag.tag ) {
      selectedTag = 'all';
    } else {
      selectedTag = event.detail.selectedTag.tag;
    }
	}
  
  function selectTagCompany(event:any) {	
    if (selectedCompany == event.detail.selectedTag.tag ) {
      selectedCompany = 'all';
    } else {
      selectedCompany = event.detail.selectedTag.tag;
    }
	}

  let selectedFilter:string = 'none';

  function selectFilters(filters:string) {
    if (selectedFilter == filters) {
      selectedFilter = 'none'
    } else {
      selectedFilter = filters
    }
    selectedTag = 'all';
    selectedCompany = 'all';
  }

</script>


<div class="filters">
  <div class="select">
    <div>Filter by :</div>  
    <div class="selectBtn" on:click={() => selectFilters('metiers')}>Métiers</div>
    <div class="selectBtn" on:click={() => selectFilters('company')}>Entreprise</div>
  </div>
  {#if selectedFilter == 'metiers'}
    <div class="filter">
      {#each posts as post}
        <FilterByTag tag={post} on:tag={selectTag}/>
      {/each}
    </div>
  {/if}
  {#if selectedFilter == 'company'}
    <div class="filter">
      {#each companys as company}
        <FilterByTag tag={company} on:tag={selectTagCompany}/>
      {/each}
    </div>
  {/if}
</div>
<!-- <Search /> -->
<div class="list">
  {#each peoples as people}
    {#if selectedTag == 'all'}
      {#if people.company == selectedCompany}
        <PeopleCard infos={people} email={$email} pass={$pass}/>
      {:else if selectedCompany == 'all'}
        <PeopleCard infos={people} email={$email} pass={$pass}/>
      {/if}
    {:else if selectedCompany =='all'}
      {#if people.post == selectedTag}
        <PeopleCard infos={people} email={$email} pass={$pass}/>
      {:else if selectedTag == 'all'}
        <PeopleCard infos={people} email={$email} pass={$pass}/>
      {/if}
    {/if}
    
  {/each}
</div>


<style>
.list {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
}
.filters {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
}
.filter {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
.select {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.select .selectBtn {
    background-color: #242424;
    border: 2px solid white;
    color: white;
    border-radius: 25px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    min-width: 100px;
    width: fit-content;
    cursor: pointer;
    margin: 10px;
}
</style>
