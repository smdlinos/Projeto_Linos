<h1>Quests<h1>

 <?php if(logged()):?>
<h2>Questionários recomendados para você <?php echo user()->name ?></h2> 
 <?php endif; ?>
<ul>
    <?php # foreach ($users as $user):?>
        <?php if(logged()):?>
        <li> Perfil | <a href="/quests/user/<?php echo user()->id_usuario;?>">Ver detalhes</a></li>
    <? # php endforeach;?>
    <?php else: ?>
    <li>Questionários que você talvez possa gostar</li>
    <?php endif; ?>
</ul>


<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js" integrity="sha512-uMtXmF28A2Ab/JJO2t/vYhlaa/3ahUOgj1Zf27M5rOo8/+fcTUVH0/E0ll68njmjrLqOBjXM3V9NiPFL5ywWPQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    async function loadUsers(){
        axios.defaults.headers{
            "Content-Type" :" application/json",
            HTTP_X_REQUESTED_WITH: "XMLHttpRequest"

        }
        try {
            const {data}  = await axios.get('/quests/users');
            console.log(data);
        } catch (error) {
            isAjax = false;
            console.log(error)
        }
    }   

loadUsers();

</script>