<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita33902112c497e121bf1cc9d089584dd
{
    public static $files = array (
        '9222f251be1582617f46f3bd695924a0' => __DIR__ . '/../..' . '/app/helpers/constantes.php',
        '49a1795c6f26253d4aaec3e227475fed' => __DIR__ . '/../..' . '/app/router/router.php',
        '21bb9dd0946c9b36e29934f0ed976d74' => __DIR__ . '/../..' . '/app/core/controller.php',
        '96b71b006251e32266edca01e89e2047' => __DIR__ . '/../..' . '/app/controllers/Home.php',
        '38c20e01c06597646a02c77cad7a51a6' => __DIR__ . '/../..' . '/app/controllers/User.php',
        'd9968996cab60cbceeec7b8d37e5f277' => __DIR__ . '/../..' . '/app/database/connect.php',
        'c508c13e2911d73c6b8718e9ba78df95' => __DIR__ . '/../..' . '/app/database/fetch.php',
        '5905922fe2480f3bf9ed1c3d005715ba' => __DIR__ . '/../..' . '/app/helpers/redirect.php',
        '817a80cc20cbc0cdc420592d7adb7e8d' => __DIR__ . '/../..' . '/app/helpers/flash.php',
        '0a04ae146f606c6b1fc4f09e125aff9a' => __DIR__ . '/../..' . '/app/helpers/sessions.php',
        'cdea25de11fa90277f8cdb3f4531063a' => __DIR__ . '/../..' . '/app/helpers/validate.php',
        'c06f4ddb3c229026f66bbe3224bdd1ed' => __DIR__ . '/../..' . '/app/database/create.php',
        '1ae73d89af97fa0f988d4435095f0341' => __DIR__ . '/../..' . '/app/helpers/getDataToChangePassword.php',
        'f72aae0591cd7d51905a62ab1467e589' => __DIR__ . '/../..' . '/app/helpers/send.php',
        '47028e37013f80baee6e1be626bc8648' => __DIR__ . '/../..' . '/app/helpers/validations.php',
        '4e213d0aa20ab09981efbe8f40ee2657' => __DIR__ . '/../..' . '/app/helpers/helpers.php',
        '6e89e2768230d192302ad44845d41060' => __DIR__ . '/../..' . '/app/database/delete.php',
        '0e7b4a72361f4ea9f68846965a7f9c6b' => __DIR__ . '/../..' . '/app/database/update.php',
    );

    public static $prefixLengthsPsr4 = array (
        'a' => 
        array (
            'app\\' => 4,
        ),
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'app\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'PHPMailer\\PHPMailer\\DSNConfigurator' => __DIR__ . '/..' . '/phpmailer/phpmailer/src/DSNConfigurator.php',
        'PHPMailer\\PHPMailer\\Exception' => __DIR__ . '/..' . '/phpmailer/phpmailer/src/Exception.php',
        'PHPMailer\\PHPMailer\\OAuth' => __DIR__ . '/..' . '/phpmailer/phpmailer/src/OAuth.php',
        'PHPMailer\\PHPMailer\\OAuthTokenProvider' => __DIR__ . '/..' . '/phpmailer/phpmailer/src/OAuthTokenProvider.php',
        'PHPMailer\\PHPMailer\\PHPMailer' => __DIR__ . '/..' . '/phpmailer/phpmailer/src/PHPMailer.php',
        'PHPMailer\\PHPMailer\\POP3' => __DIR__ . '/..' . '/phpmailer/phpmailer/src/POP3.php',
        'PHPMailer\\PHPMailer\\SMTP' => __DIR__ . '/..' . '/phpmailer/phpmailer/src/SMTP.php',
        'app\\controllers\\Home' => __DIR__ . '/../..' . '/app/controllers/Home.php',
        'app\\controllers\\Login' => __DIR__ . '/../..' . '/app/controllers/Login.php',
        'app\\controllers\\User' => __DIR__ . '/../..' . '/app/controllers/User.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita33902112c497e121bf1cc9d089584dd::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita33902112c497e121bf1cc9d089584dd::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInita33902112c497e121bf1cc9d089584dd::$classMap;

        }, null, ClassLoader::class);
    }
}