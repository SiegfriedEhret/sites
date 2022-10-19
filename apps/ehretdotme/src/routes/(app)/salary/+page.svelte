<script lang="ts">
    import type { PageData } from './$types';
    import type { Job } from '@packages/utils/types/jobs';

    export let data: PageData;
    const { items }: { items: Job[] } = data;

    function f(amount, currency) {
        return new Intl.NumberFormat('en', { style: 'currency', currency }).format(amount)
    }

    function sortByDate(jobs: Job[]) {
        return jobs.sort((a, b) => a.startDate.localeCompare(b.startDate));
    }

    const td = "block lg:table-cell before:block lg:before:hidden before:font-bold before:content-[attr(data-before)]"
</script>

<h1>Salary transparency</h1>

<p>Following the example from <a href="https://xeiaso.net/salary-transparency">this page</a>, here is an overview on my different jobs and associated salaries.</p>
<p>🚧 This is the first version of this page, some numbers are wrong because I have not been through all my archives yet; starting with MetLife, I am confident with the numbers. I will also include raises.</p>

<table class="block lg:table">
    <thead class="hidden lg:table-header-group">
        <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Start</th>
            <th>End</th>
            <th>Entry Salary</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
    {#each sortByDate(items) as item}
        <tr class="block lg:table-row">
            <td class={`${td} pl-3 lg:pl-0`} data-before="Title">{item.title}</td>
            <td class={td} data-before="Company"><a href={item.url}>{item.company}</a></td>
            <td class={td} data-before="Start">{item.startDate}</td>
            <td class={td} data-before="End">{item.endDate ?? ""}</td>
            <td class={td} data-before="Entry Salary">
                {#if item.salary}
                    {f(item.salary, item.currency)}
                    {#if item.bonus}
                        <br/>
                        Bonus: {f(item.bonus, item.currency)} ({item.bonusDescription})
                    {/if}
                {/if}
            </td>
            <td class={td} data-before="Note">{item.comment ?? ""}</td>
        </tr>
        {/each}
    </tbody>
</table>
