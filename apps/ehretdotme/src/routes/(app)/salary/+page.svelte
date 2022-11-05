<script lang="ts">
    import type { PageData } from './$types';
    import type { Job } from '@packages/utils/types/jobs';

    export let data: PageData;
    const { items }: { items: Job[] } = data;

    function f(amount: number, currency: string) {
        return new Intl.NumberFormat('en', { style: 'currency', currency }).format(amount)
    }

    function sortByDate(jobs: Job[]) {
        return jobs.sort((a, b) => a.startDate.localeCompare(b.startDate));
    }
</script>

<svelte:head>
    <title>/salary [ehret.me]</title>
    <meta property="og:title" content="/salary [ehret.me]" />
    <meta name="og:description" content="Salary transparency: about job titles and salaries." />
    <meta name="description" content="Salary transparency: about job titles and salaries." />
</svelte:head>

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
            <td data-before="Title">{item.title}</td>
            <td data-before="Company"><a href={item.url}>{item.company}</a></td>
            <td data-before="Start">{item.startDate}</td>
            <td data-before="End">{item.endDate ?? ""}</td>
            <td data-before="Entry Salary">
                {#if item.salary}
                    {f(item.salary, item.currency)}
                    {#if item.bonus}
                        <br/>
                        Bonus: {f(item.bonus, item.currency)} ({item.bonusDescription})
                    {/if}
                {/if}
            </td>
            <td data-before="Note">{item.comment ?? ""}</td>
        </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        display: block;
        font-size: 1rem;
    }
    thead {
        display: none;
    }
    tbody tr {
        display: block;
    }
    tbody td {
        display: block;
    }
    tbody tr {
        border-top: 1px solid var(--wevet);
        margin-top: 1rem;
        padding-top: 1rem;
    }
    tbody tr:first-child {
        border-top: none;
    }
    tbody td::before {
        display: block;
        font-weight: bold;
        content: attr(data-before);
    }

    @media screen and (min-width: 800px) {
        table {
            display: table;
            border-collapse: collapse;
        }
        td {
            padding: .2rem .5rem;
        }
        td:first-child {
            padding-left: 0;
        }
        td:last-child {
            padding-right: 0;
        }
        thead {
            display: table-header-group;
        }
        tbody tr {
            display: table-row;
        }
        tbody td {
            display: table-cell;
            border-top: 1px solid var(--wevet);
        }
        tbody td::before {
            display: none;
        }
    }
</style>