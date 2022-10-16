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
</script>

<h1>Salary transparency</h1>

<p>Following the example from <a href="https://xeiaso.net/salary-transparency">this page</a>, here is an overview on my different jobs and associated salaries.</p>
<p>🚧 This is the first version of this page, some numbers are wrong because I have not been through all my archives yet; starting with MetLife, I am confident with the numbers. I will also include raises.</p>

<table>
    <thead>
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
        <tr>
            <td>{item.title}</td>
            <td><a href={item.url}>{item.company}</a></td>
            <td>{item.startDate}</td>
            <td>{item.endDate ?? ""}</td>
            <td>
                {#if item.salary}
                    {f(item.salary, item.currency)}
                    {#if item.bonus}
                        <br/>
                        Bonus: {f(item.bonus, item.currency)} ({item.bonusDescription})
                    {/if}
                {/if}
            </td>
            <td>{item.comment ?? ""}</td>
        </tr>
        {/each}
    </tbody>
</table>
